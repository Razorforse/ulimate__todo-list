import React from 'react'
import PropTypes from 'prop-types'

class Add extends React.Component {

    state = {
        author: '',
        text: '',
        bigText: '',
        check: false
    }
    
    static propTypes = {
        onAddNews: PropTypes.func.isRequired
    }

    onBtnClickHandler = e => {
        e.preventDefault()
        let { author, text , bigText} = this.state
        this.props.onAddNews({author, text, bigText})
        alert(`${author}, ваша новость отпраавлена`)
    }

    onCheck = e => {
        this.setState({check: e.target.checked})
    }

    onChange = e => {
        this.setState({[e.currentTarget.id]: e.currentTarget.value})
    }

    validate = () => {
      let {text, author, check} = this.state;
        return(text.trim()&&author.trim()&&check)?true:false
    }

    render() {
      return (
        <form className='add'>
          <input
            id="author"
            type='text'
            className='add__author'
            value={this.state.author}
            placeholder='Ваше имя'
            onChange={this.onChange}

          />
          <textarea
            id="text"
            className='add__text'
            value={this.state.text}
            placeholder='Загловок новости'
            onChange={this.onChange}
          ></textarea>
          <textarea id="bigText" 
            className="add__text"
            value={this.state.bigText}
            placeholder='Текст новости'
            onChange={this.onChange}
             />
          <label className='add__checkrule'>
            <input type='checkbox' onChange={this.onCheck} /> Я согласен с правилами
          </label>
          <button
            className='add__btn'
            onClick={this.onBtnClickHandler}
            disabled={!this.validate()}>
          ЗапоСтить!
          </button>
        </form>
      )
    }
  }

  export default Add