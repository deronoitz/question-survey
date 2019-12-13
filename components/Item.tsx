
const Input = (props: any) => {
  if (props.type === 'radio') {
    return (
      <>
        <div className="inputBox radio">
          <input type="radio" value={props.radioOption.y} name={props.number} />
          <div className="stylerRadio">
            {props.radioOption.y}
          </div>
        </div>
        <div className="inputBox radio">
          <input type="radio" value={props.radioOption.n} name={props.number} />
          <div className="stylerRadio">
            {props.radioOption.n}
          </div>
        </div>
      </>
    )
  } else if (props.type === 'input') {
    return (
      <>
      <div className="inputBox">
        <textarea name={props.number} placeholder="Type your answer here..."></textarea>
      </div>
      <br/>
      <button className="btn">Lanjut</button>
      </>
    )
  } else if (props.type === 'checkbox'){
    return (
      <>
      <div className="inputBox checkbox">
          {
          props.checkOption.map((i, index) => (
            <div className="checkBox" key={index}>
              <input type="checkbox" name={i}/>
              <div className="stylerCheckbox">
                {i}
              </div>
            </div>
          ))
          }
      </div>
      <br/>
      <button className="btn">Lanjut</button>
      </>
    )
  }
  return null
}
const Item = (props: any) => {
  return (
    <div className="inputForm">
      <div className="q">
        <span>{props.number}</span>
        <div>
          <p>
            {props.question}
            {props.required ? '*' : null}
          </p>
          {
            props.subQuestion ? (
              <span className="sub">{props.subQuestion}</span>
            ) : null
          }

        </div>
      </div>
      <div className="inputContainer">
        {Input(props)}
      </div>
    </div>
  )
}

export default Item;