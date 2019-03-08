import React from 'react'
import storage from './storage/storage'
class Complete extends React.Component {
    constructor(props){
        super(props);

    }

    addNoComplete (key,value) {
        let list =  this.props.get;
        let doneList =  this.props.post;
        doneList.splice(key,1);
        list.push(value);
        console.log(list)

        storage.set("list",list);
        storage.set("doneList",doneList);
        this.props.set()
    };

    delNoComplete (key){
        let doneList =  this.props.post;
        console.log(key)
        doneList.splice(key,1);
        this.setState(
            {
                doneList:doneList
            }
        )
        storage.set("doneList",doneList);
    }
    render() {
        //遍历数据，根据数据的长度生成comment
        let newcomment = this.props.post.map((value,key)=>{
                return (
                    <div key={key}>
                        <input type="checkbox" checked={true} onClick={this.addNoComplete.bind(this,key,value)}/>
                        <span>{value}</span>
                        <button onClick={this.delNoComplete.bind(this,key)}>删除</button>
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
export default Complete