import React from 'react';
import './select.less';
import PropTypes from 'prop-types';

// TO DO:
// 1. 把数据通过 props 传入且需要有 proptypes 的校验
//    - options
//    - value
//    - defaultValue
//    - onChange
// 2. 下拉菜单需要有显示和隐藏的功能

class Select extends React.Component {
  static propTypes = {
    options: PropTypes.array,
    value: PropTypes.string,
    onChange: PropTypes.func,
  };
  static defaultProps = {
    options: [],
    value: '',
    onChange: () => {},
  }

  constructor(props) {
    super();

    this.state = {
      selectedValue: '',
      optionsVisble: false,
    };
  }

  componentDidMount () {
    const { options, value } = this.props;
    // ref是用来获取DOM节点的
    // this.nv.addEventListener('click', this.selectFn);
    //或者
    // var ele = document.getElementsByClassName('select')[0];
    // ele.addEventListener('click', this.selectFn);

    // 点击空白区域，optionsDiv隐藏
    document.addEventListener('click', (e) => { this.disabledOptionsDiv(e) });
    let selectedValue = '';
    options.map((option) => {
      if (option.value === value) {
        selectedValue = option.label;
      }
    })
    this.setState({ selectedValue });
  }

  // selectFn = () => {
  //   console.log('enter');
  //   console.log(this.setState);
  //   this.setState({ optionsVisble: true });
  // }

  disabledOptionsDiv = (e) => {
    // e.path[0].className 可以知道具体点击的某个节点
    if (e.path[0].className !== 'select') {
      this.setState({ optionsVisble: false });
    }
  }

  handleClickChange = (e, option) => {
    console.log(option, 'option');
    const { onChange } = this.props;

    this.setState({
      selectedValue: option.label,
      optionsVisble: false,
    });

    onChange(option);
  }

  handleSelectClick = () => {
    const { optionsVisble } = this.state;
    this.setState({ optionsVisble: !optionsVisble });
  };

  render() {
    const { selectedValue, optionsVisble } = this.state;
    const { options, value } = this.props;
    console.log(value, '父传递的value');
    const checked = value === selectedValue;
    console.log(checked, 'checked===', value, selectedValue);

    return (
      <div>
        <div className="select" onClick={this.handleSelectClick}>{selectedValue}</div>
        {
          optionsVisble && (
            <div className="optionsDiv">
              {
                options.map((option) => (
                  <div
                    className={ option.value === value ? 'active' : null}
                    style={{ marginTop: '8px' }}
                    key={option.key}
                    value={option.value}
                    onClick={(e) => {this.handleClickChange(e, option)}}
                  >
                  {option.value}
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    )
  }
}

export default Select;