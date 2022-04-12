import React from 'react'
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import CreateIcon from '@mui/icons-material/Create';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <>
            <div className='mt-5'>
                <div className="container ">
                    <div className='add_btn mt-2'>
                        <button className='btn btn-primary'>
                            Add Data
                        </button>
                    </div>

                    <table class="table">
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
                            <tr>
                                <th scope="row">1</th>
                                <td>name</td>
                                <td>eamil@g.com</td>
                                <td>bnvbvbn</td>
                                <td>56585858</td>

                                <td className='d-flex justify-content-between'>
                                    <button className="btn btn-success"><i class="fas fa-eye"></i></button>
                                    <button className="btn btn-primary"><i class="fa-solid fa-pen"></i></button>
                                    <button className="btn btn-danger" ><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
