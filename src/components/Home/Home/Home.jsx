import { useLoaderData } from "react-router-dom";
import NewsSummeryCard from "../../Shared/NewsSummeryCard/NewsSummeryCard";

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <h2>Vergo news {allNews.length}</h2>
            {
                allNews.map((news,i) => <NewsSummeryCard 
                    key={i}
                    news={news}
                >
                </NewsSummeryCard>)
            }
        </div>
    );
};

export default Home;