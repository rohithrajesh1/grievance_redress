import React , {Component} from 'react';

class G_details extends React.Component{
    routeChange = ( route ) =>{
        this.props.routeChange(route);
    }
    render(){
        return(
            <div>
                <div class="container d-flex h-100">
                    <div class="row align-self-center w-100 my-4">
                        <div class="col-6 mx-auto">
                                    <div class="card mb-4">
                                        <div class="card-header">
                                            <p>
                                                <strong>Type:</strong> Day to day needs
                                            </p>
                                        </div>
                                        <div class="card-body">
                                          Roads are very bad in my area.
                                          <hr/>
                                            <div class="d-flex justify-content-between">
                                                <p><strong>Assigned to:</strong> ADM01</p>
                                                <p><strong>Status:</strong> Solved</p>
                                                <p><strong>ResponseID:</strong> R8</p>
                                            </div>
                                        <hr/>
                                            <strong>Response: </strong>
                                        New roads were laid in and around that area by R&B department.Hope now it is fine
                                      </div>
                                      </div>
                                </div>
                        </div>
                </div>

                <div class="my-2 d-flex justify-content-center">
                    <button type="button" class="btn btn-primary btn-lg" onClick ={()=>this.routeChange('response')}>New Response</button>
                </div>
            </div>
        );
    }
}

export default G_details;
