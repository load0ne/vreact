/* eslint-disable */

(function () {
  var IncreaseButton = function(props) {
    return React.createElement(
      'button',
      {
        onClick: props.onClick,
      },
      '+'
    );
  }
  
  var CounterValue = function(props) {
    return React.createElement(
      'p',
      null,
      `count: ${props.count}`
    );
  }
  
  var Counter = function(props) {
    var countState = React.useState(0);
    var count = countState[0];
    var setCount = countState[1];

    var handleClickIncreaseButton = function() {
      setCount(count + 1);
    }
  
    return React.createElement(
      'div',
      null,
      IncreaseButton({
        onClick: handleClickIncreaseButton,
      }),
      CounterValue({
        count,
      })
    );
  }
  
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('app'),
  );
  
})()
