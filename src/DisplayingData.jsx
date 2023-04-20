import React from 'react';

function DisplayingData(){
    const user = {
        name:'Bull Dog',
        imageUrl: "https://www.google.com/url?sa=i&url=http%3A%2F%2Ft2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcTgftCmO7TTXwda1It8kj_MFxBc49KYmgM1PHxMzhZHgATuFVEvqjE1BXsUbgTTIL1bezP5Pjmn3hfF6uY&psig=AOvVaw3qnCLiSjPuetDfDbzh6zDD&ust=1682058239227000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCICb3rLpt_4CFQAAAAAdAAAAABAE",
        imageSize: 90,
    }
    return (
        <>
        <h2>Hi {user.name}</h2>
        <img className="div-new" src={user.imageUrl} alt='newimg' height={300} width={300}></img>

        </>
    )
}

export default DisplayingData;