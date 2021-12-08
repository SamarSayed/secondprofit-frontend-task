import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteRow } from "../store/actions";
import Swal from "sweetalert2";
import FormModal from "./form_modal";
import listIcon from "../assets/images/list icon.jfif";

function ListRow(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

useEffect(()=>{
  console.log("props.data = ",props.data);
  console.log("props.index = ",props.index);
},[props.data,props.index])

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (mood) => {
    props.setModalTitle(mood === "add" ? "Add" : "Edit");
    setShow(true);
  };

  const deleteFun = () => {
    Swal.fire({
      title: "Delete row!",
      text: "Are you sure ?",
      icon: "error",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteRow(props.index));
        Swal.fire("Deleted!", "", "success");
      }
    });
  };
  const editFun = () => {
    handleShow("edit");
  };


  return (
    <>
      <tr>
        <td>
          <img src={listIcon} alt="List icon" />
          <a href={props.data.Link} class="user-link" target="_blank">
            {props.data.API}
          </a>
          <span class="user-subhead">{props.data.Category}</span>
        </td>
        <td>{props.data.Description}</td>
        <td style={{ width: "20%" }}>
          <a class="table-link" onClick={editFun}>
            <span class="fa-stack">
              <i class="fa fa-square fa-stack-2x"></i>
              <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
            </span>
          </a>
          <a class="table-link danger" onClick={deleteFun}>
            <span class="fa-stack">
              <i class="fa fa-square fa-stack-2x"></i>
              <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </td>
      </tr>
      <FormModal
        handleClose={handleClose}
        show={show}
        title={props.modal_title}
        data={props.data}
        index={props.index}
      />
    </>
  );
}
export default ListRow;
