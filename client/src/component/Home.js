import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { adddata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider';
import { deldata } from './context/ContextProvider';


export default function Home() {


    const [getuserData, setUserData] = useState([]);
    console.log(getuserData);

    const { udata, setUdata } = useContext(adddata);
    const { updata, setUPdata } = useContext(updatedata);
    const { dltdata, setDLTdata } = useContext(deldata);


    const getdata = async () => {

        const res = await fetch("/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserData(data);
            console.log("get data ");

        }
    }


    useEffect(() => {
        getdata();
    }, [])

    const deleteUser = async (id) => {
        const res2 = await fetch(`/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            // console.log("user deleted");
            setDLTdata(deletedata)
            getdata();
        }
    }

    return (
        <>
            {
                udata ?
                    <>
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{udata.name}</strong>  added succesfully!
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }

            {
                updata ?
                    <>
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{updata.name}</strong>  updated succesfully!
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }

            {
                dltdata ?
                    <>
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{dltdata.name}</strong>  deleted succesfully!
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }

            <div className='mt-5'>
                <div className="container ">
                    <div className='add_btn mt-2'>
                        <NavLink to="/register" className='btn btn-primary'>
                            Add Data
                        </NavLink>
                    </div>

                    <table className="table">
                        <thead>
                            <tr className='table-dark'>
                                <th scope="col">id</th>
                                <th scope="col">username</th>
                                <th scope="col">email</th>
                                <th scope="col">job</th>
                                <th scope="col">phone</th>
                                <th scope="col"></th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                getuserData.map((ele, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{ele.name}</td>
                                                <td>{ele.email}</td>
                                                <td>{ele.work}</td>
                                                <td>{ele.mobile}</td>

                                                <td className='d-flex justify-content-between'>
                                                    <NavLink to={`view/${ele._id}`}><button className="btn btn-success"><i className="fas fa-eye"></i></button></NavLink>
                                                    <NavLink to={`edit/${ele._id}`}><button className="btn btn-primary"><i className="fa-solid fa-pen"></i></button></NavLink>
                                                    <button className="btn btn-danger" onClick={() => deleteUser(ele._id)} ><i className="fa-solid fa-trash"></i></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
