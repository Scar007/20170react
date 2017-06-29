import React,{Component} from 'react';
export default class MessageBox extends Component{
    constructor(){
        super();
        //定义默认状态对象 messages是消息的数组
        this.state = {messages:[{username:'张三',content:'今天天气很好',createAt:new Date()}]};
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h2 className="text-center">欢迎来到珠峰留言版</h2>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {
                                        this.state.messages.map((message,index)=>(
                                            <li className="list-group-item">{message.username}:{message.content} <span className="pull-right">{message.createAt.toLocaleString()}</span></li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="panel-footer">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}