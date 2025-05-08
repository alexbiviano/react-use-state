const Card = (props) => {
    return (
        <>
          
            <div className={"card" + (props.isActive ? '-active' : '')}>
                <h2>{props.obj.title}</h2>
                <div className="description">
                    {props.obj.description}
                </div>
            </div>
        </>
    )
}

export default Card