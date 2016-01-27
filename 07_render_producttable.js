// Step 07: Render ProductTable component with placeholders for ProductCategoryRow and
//          ProductRow components.

var SearchBar = React.createClass({
  render: function() {
    var filterText = this.props.filterText,
        inStockOnly = this.props.inStockOnly;

    return (
      <form>
        <input type="text"
          className="textInput"
          placeholder="Search..."
          value={filterText}
          ref="filterTextInput"
          onChange={this.handleChange} />

        <p className="screen">{filterText ? filterText : '_'}</p>

        <p>
          <input type="checkbox"
            checked={this.props.inStockOnly}
            id="inStockOnlyInput"
            ref="inStockOnlyInput"
            onChange={this.handleChange} />
          {' '}
          <label htmlFor="inStockOnlyInput">Only show products in stock.</label>
        </p>
      </form>
    );
  },

  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    )
  }
});

// NEW: ProductCategoryRow component placeholder.
var ProductCategoryRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td colspan="2">ProductCategoryRow</td>
      </tr>
    );
  }
});

// NEW: ProductRow component placeholder
var ProductRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td colspan="2">ProductRow</td>
      </tr>
    );
  }
});

// NEW: ProductTable component
var ProductTable = React.createClass({
  render: function() {
    var products = this.props.products,
        filterText = this.props.filterText,
        inStockOnly = this.props.inStockOnly,
        rows = [],
        prevCat;

    // NEW: Render product table rows
    products.forEach(function(product, index) {
      // Filter products based on filterText and inStockOnly values
      if (!product.name.match(new RegExp(filterText, 'i')) ||
          (inStockOnly && !product.stocked)) {
        return;
      }

      // Insert ProductCategoryRow
      if (product.category !== prevCat) {
        rows.push(<ProductCategoryRow key={product.category} category={product.category} />);
      }

      // Insert ProductRow
      rows.push(<ProductRow key={product.name} name={product.name} price={product.price} stocked={product.stocked} />);
      prevCat = product.category;
    });

    if (rows.length === 0) {
      rows.push(<tr key="norecords"><td colSpan="2">No records found</td></tr>);

    }

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var AwesomeTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      inStockOnly: false
    }
  },

  render: function() {
    var products = this.props.products,
        filterText = this.state.filterText,
        inStockOnly = this.state.inStockOnly;

    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onUserInput={this.handleUserInput} />

        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly} />
      </div>
    );
  },

  handleUserInput: function(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  }
});

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <AwesomeTable products={PRODUCTS} />,
  document.getElementById('container')
);
