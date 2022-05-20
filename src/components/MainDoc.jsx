import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FetchOrders } from "../Pages/FetchOrders";
import Iframe from 'react-iframe'

const MainDoc = () => {

    const dispatch = useDispatch();
    //article1//
    const title1 = useSelector((state) => state.articles1.title);
    const description1 = useSelector((state) => state.articles1.content);
    const Source1 = useSelector((state) => state.articles1.url);

    //article2//
    const title2 = useSelector((state) => state.articles2.title);
    const description2 = useSelector((state) => state.articles2.content);
    const Source2 = useSelector((state) => state.articles1.url);

    //article3//
    const title3 = useSelector((state) => state.articles3.title);
    const description3 = useSelector((state) => state.articles3.content);
    const Source3 = useSelector((state) => state.articles1.url);

    //article4//
    const title4 = useSelector((state) => state.articles4.title);
    const description4 = useSelector((state) => state.articles4.content);
    const Source4 = useSelector((state) => state.articles1.url);

    //article5//
    const title5 = useSelector((state) => state.articles5.title);
    const description5 = useSelector((state) => state.articles5.content);
    const Source5 = useSelector((state) => state.articles1.url);

    //article6//
    const title6 = useSelector((state) => state.articles6.title);
    const description6 = useSelector((state) => state.articles6.content);
    const Source6 = useSelector((state) => state.articles1.url);


    // const data = []
    // useEffect(() => {
    //     dispatch(FetchOrders());
    //   }, [dispatch]);

    const changename = () => {
        dispatch(FetchOrders());
    }


    return (
        <>
            <div>
                <h1> Cricket Fans App</h1>
                <h2> Live Cricket Score</h2>
                <Iframe url="https://widget.crictimes.org/"
                    width="100%"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    scrolling="yes" />


                <h2>Sports News</h2>
                <div>
                    <div className="article" >
                        <div className="box1" >
                            <h3><a href={Source1}>{title1}</a></h3>
                            <p>{description1}</p>
                            <p>{Source1}</p>
                        </div>
                        <div className="box2">
                            <h3>{title2}</h3>
                            <p>{description2}</p>
                            <p>{Source2}</p>
                        </div>
                        <div className="box3">
                            <h3>{title3}</h3>
                            <p>{description3}</p>
                            <p>{Source3}</p>
                        </div>
                        <div className="box4">
                            <h3>{title4}</h3>
                            <p>{description4}</p>
                            <p>{Source4}</p>
                        </div>
                        <div className="box5">
                            <h3>{title5}</h3>
                            <p>{description5}</p>
                            <p>{Source5}</p>
                        </div>
                        <div className="box6">
                            <h3>{title6}</h3>
                            <p>{description6}</p>
                            <p>{Source6}</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => changename()}> Update Details</button>
            </div>
        </>
    );
};

export default MainDoc
