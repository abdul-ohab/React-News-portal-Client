import { useLoaderData } from "react-router-dom";
import NewsSummeryCard from "../../Shared/NewsSummeryCard/NewsSummeryCard";

const Category = () => {
    const categoryNews = useLoaderData()
    return (
        <div>
            <h6>This is Category has news: {categoryNews.length}</h6>
            {
                categoryNews.map((news,i) => <NewsSummeryCard
                    key={i}
                    news={news}
                ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Category;