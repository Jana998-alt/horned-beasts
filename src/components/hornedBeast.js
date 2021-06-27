const hornedBeast = (beastTitle,ImageURL,imageTitle,description) => {
    return (
        <div>
            <h2 class='beastTitle'>{beastTitle}</h2>
            <img src={ImageURL} alt='' title = {imageTitle}/>
            <p>{description}</p>
        </div>
    )
}

export default hornedBeast;