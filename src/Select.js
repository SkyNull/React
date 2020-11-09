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
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  };
  static defaultProps = {
    options: [],
    defaultValue: '',
    value: undefined,
    onChange: undefined,
  }

  constructor(props) {
    super(props);

    this.state = {
      selectedValue: this.props.defaultValue,
      optionsVisble: false,
    };
  }

  static getDerivedStateFromProps(props) {
    const result = props.value === undefined ? null : { selectedValue: props.value };
    
    return result;
  }

  componentDidMount () {
    const { options } = this.props;
    const { selectedValue } = this.state;
    // ref是用来获取DOM节点的
    // this.nv.addEventListener('click', this.selectFn);
    //或者
    // var ele = document.getElementsByClassName('select')[0];
    // ele.addEventListener('click', this.selectFn);

    // 点击空白区域，optionsDiv隐藏
    document.addEventListener('click', (e) => { this.disabledOptionsDiv(e) });
    // let selectedValues = '';
    // options.map((option) => {
    //   if (option.value === selectedValue) {
    //     selectedValues = option.value;
    //   }
    // })
    // this.setState({ selectedValue: selectedValues });
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
    const { onChange, value } = this.props;

    this.setState({
      optionsVisble: false,
    });

    if (onChange) {
      onChange(option);
    }

    if (!value) {
      this.setState({ selectedValue: option.value });
    }
  }

  handleSelectClick = () => {
    const { optionsVisble } = this.state;
    this.setState({ optionsVisble: !optionsVisble });
  };

  render() {

    const { selectedValue, optionsVisble } = this.state;
    const { options } = this.props;
    let customContent = '';
    options.forEach((option) => {
      console.log(selectedValue, 'selectedValue');
      if (option.value === selectedValue) {
        console.log('111');
        customContent = option.custom;
      }
    })

    return (
      <div>
        <div className="select" onClick={this.handleSelectClick}>{customContent}</div>
        {
          optionsVisble && (
            <div className="optionsDiv">
              {
                options.map((option) => (
                  <div
                    className={ option.value === selectedValue ? 'active' : null}
                    style={{ marginTop: '8px' }}
                    key={option.key}
                    // value={option.value}
                    onClick={(e) => {this.handleClickChange(e, option)}}
                  >
                  {option.label}
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