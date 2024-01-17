export default function News(props)
{
    console.log(props);
    return (

        <div className="news">

            <div className="news-img">
                <img src= "https://readwrite.com/wp-content/uploads/2023/12/msfs_2024_2.jpg"/>
          </div>

            <h1>--Title--</h1>

            <p>------Description------</p>

            <a href="#">Read More</a>

            <div className="source">
                <p>--Author--</p>
                <p>--Published</p>

            </div>

        </div>

        
    )
}