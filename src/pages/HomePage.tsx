import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../store/actions/action'
import { AppDispatch, RootState } from '../store/reducers/store'
import Graph from '../components/Graph'
import CustomTable from '../components/CustomTable'

const HomePage: React.FC = () => {
    const { data } = useSelector((state: RootState) => state);
    const currentProduct = data[0];
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getData(""));
    })

    return (
        <div>
            <div id={"header"}>
                <img src={'stackline_logo.svg'} id={"logo"} alt={"stackline-logo"}/>
            </div>
            <div id={"body"}>
                <div id={"sidebar"}>
                    <div id={"sidebar-content"}>
                        <img src={currentProduct.image} id={"sidebar-image"} alt={"an image of a nutribullet blender"}/>
                        <div id={"sidebar-text"} >
                            { currentProduct.title }
                        </div>
                        <div id={"sidebar-subtext"} >
                            { currentProduct.subtitle }
                        </div>
                        <div id={"sidebar-tags"} >
                            { currentProduct.tags.map(tag => <button id={"sidebar-tag-buttons"} key={tag}> {tag} </button>) }
                        </div>
                    </div>
                </div>
                <div id={"content"}>
                    <div id={"content-graph"}>
                        <Graph data={currentProduct.sales} />
                    </div>
                    <div id={"content-table"}>
                        <CustomTable data={currentProduct.sales} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
