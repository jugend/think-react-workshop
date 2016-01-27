// Step 03: Create AwesomeTable component

// NEW: Add AwesomeTable component
var AwesomeTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      inStockOnly: false
    }
  },

  render: function() {
    return (
      <div>
        Awesome!
      </div>
    )
  }
});

// NEW: Init products data and render AwesomeTable component to 'container' element
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
