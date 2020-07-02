import React,{Component} from 'react';

class Output extends Component {

  render(){
    const {calc} = this.props
    return (
    <div className="tc">
      <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
        <h1 className="f4 bg-light-green br3 br--top black-60 mv0 pv2 ph3">Number of days between above dates</h1>
        <div className="pa3 bt b--black-10">
      <div className="pa2">
        <div className="overflow-auto">
          <table className="f6 w-100 mw8 center" cellSpacing="0">
            <tbody className="lh-copy">
              <tr className="stripe-dark">
                <td className="pa2">{`${calc.numberofdays} days`}</td>
              </tr>
              <tr className="stripe-dark">
                <td className="pa2">{`${calc.numberofhours} hours`}</td>
              </tr>
              <tr className="stripe-dark">
                <td className="pa2">{`${calc.numberofminutes} minutes`}</td>
              </tr>
              <tr className="stripe-dark">
                <td className="pa2">{`${calc.numberofseconds} seconds`}</td>
              </tr>
              <tr className="stripe-dark">
                <td className="pa2">{`${calc.numberofweeks} weeks and ${calc.numberofdaysleft} days`}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        </div>
      </article>
    </div>
  );
  }
}

export default Output;