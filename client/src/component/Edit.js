import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { updatedata } from './context/ContextProvider';

export default function Edit() {


    // const [getuserData, setUserData] = useState([]);
    // console.log(getuserData);

    const { updata, setUPdata } = useContext(updatedata);

    const navigate = useNavigate("");
    const [inpval, setINP] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        add: "",
        desc: ""
    })
    function setdata(e) {
        console.log(e.target.value)
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const { id } = useParams("");
    console.log(id)

    const getdata = async () => {

        const res = await fetch(`/getuser/${id}`, {
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
            setINP(data);
            console.log("get data ");

        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const updateuser = async (e) => {
        e.preventDefault();

        const { name, email, work, add, mobile, desc, age } = inpval;

        const res2 = await fetch(`/updateuser/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, work, add, mobile, desc, age
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if (res2.status === 422 || !data2) {
            alert("fill the data");
        } else {
            navigate("/")
            // alert("data added")
            setUPdata(data2);
        }

    }


    return (
        <div className="container">
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label  className="form-label">Name</label>
                        <input type="text" value={inpval.name} onChange={setdata} name="name" className="form-control" id="exampleInputEmail1"/>
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label  className="form-label">email</label>
                        <input type="email" value={inpval.email} onChange={setdata} name="email" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label  className="form-label">age</label>
                        <input type="text" value={inpval.age} onChange={setdata} name="age" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div clasName="mb-3 col-lg-6 col-md-6 col-12">
                        <label  className="form-label">Mobile</label>
                        <input type="number" value={inpval.mobile} onChange={setdata} name="mobile" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label  className="form-label">Work</label>
                        <input type="text" value={inpval.work} onChange={setdata} name="work" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label  className="form-label">Address</label>
                        <input type="text" value={inpval.add} onChange={setdata} name="add" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-12 col-md-12 col-12">
                        <button  className="btn btn-primary" onClick={updateuser} >Submit</button>
                    </div>
                    </div>
            </form>
        </div>
    )
}
