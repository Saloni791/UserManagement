import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import Card from '@mui/material/Card';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams, useNavigate } from 'react-router-dom';

export default function Details() {

    const navigate = useNavigate();

    const [getuserData, setUserData] = useState([]);
    console.log(getuserData);

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
            console.log("user deleted");
            navigate("/");
           
        }
    }


    return (
        <div className="container mt-3">
            <h1 style={{ fontWeight: 400 }}>Welcome Harsh Pathak</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="add_btn">
                        <NavLink to={`/edit/${getuserData._id}`}>  <button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
                        <button className="btn btn-danger" onClick={() => deleteUser(getuserData._id)}><DeleteOutlineIcon /></button>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className="mt-3">Name: <span >{getuserData.name}</span></h3>
                            <h3 className="mt-3">Age: <span >{getuserData.age}</span></h3>
                            <p className="mt-3"><MailOutlineIcon />Email: <span>{getuserData.email}</span></p>
                            <p className="mt-3"><WorkIcon />Occuption: <span>{getuserData.work}</span></p>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">

                            <p className="mt-5"><PhoneAndroidIcon />mobile: <span>{getuserData.mobile}</span></p>
                            <p className="mt-3"><LocationOnIcon />location: <span>{getuserData.add}</span></p>
                            <p className="mt-3">Description: <span>{getuserData.desc}</span></p>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>

    )
}
