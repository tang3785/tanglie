import React,{Component} from 'react'
import storage from './storage/storage'
import No from './NoComplete'
import Complete from './Complete'
class ToDoList extends Component {
    constructor() {
        super();

        this.state = {
            list: [],
            doneList:[]
        }
    }
    componentDidMount(){
        let list =  storage.get("list");
        let doneList =  storage.get("doneList");

        if(list){
            this.setState({
                list:list
            })
        }
        if(doneList){
            this.setState({
                doneList:doneList
            })
        }

    }
    set(){
        this.setState({
            list:this.state.list,
            doneList:this.state.doneList
        })
    }

    getVal () {
        let list = this.state.list;
            list.push(this.refs.myInput.value);
            this.setState({
                list:list,
            })
        storage.set("list",list);

    }


    render() {
        return (
            <div>
                <input type={'text'}  ref = 'myInput' />
                <button onClick={this.getVal.bind(this)}>添加</button>
                <div>
                    <h1>正在进行</h1>

                    <No get={this.state.list} set={this.set.bind(this)} post={this.state.doneList} sta={this.setState}/>
                </div>
                <div>
                    <h1>已经完成</h1>
                   <Complete get={this.state.list} set={this.set.bind(this)} post={this.state.doneList}/>
                </div>
            </div>
        )
    }
}
export default ToDoList;

