const cardLayout = () => {
    const { title , summary , image} = props;

    return (
        <div>
            <img src={image} alt={title}/>
            <h1>{title}</h1>
            <p>{summary}</p>

        </div>
    )
}
export default cardLayout;