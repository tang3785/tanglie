import React from 'react'
import storage from './storage/storage'
class No extends React.Component {
    constructor(props){
        super(props);

    }

    addComplete (key,value) {
        let doneList =  this.props.post;
        let list =  this.props.get;
        list.splice(key,1);
        doneList.push(value);
        // this.setState(
        //     {
        //         list:list,
        //         doneList:doneList
        //     }
        // )
        storage.set("list",list);
        storage.set("doneList",doneList);
        this.props.set()
    }
    delComplete (key) {
        let list =  this.props.get;
        list.splice(key,1);
        this.setState(
            {
                list:list
            }
        )
        storage.set("list",list);
    }
    render() {
        //遍历数据，根据数据的长度生成comment
        let newcomment = this.props.get.map((value,key)=>{
            return (
                <div key={key}>
                    <input type="checkbox" checked={false} onClick={this.addComplete.bind(this,key,value)}/>
                    <span>
                    {value}
                    </span>
                    <button onClick={this.delComplete.bind(this,key)}>删除</button>
                </div>
            )
            }
        )
        return(
            <div>
                {newcomment}
            </div>

        )

    }
}

export default No