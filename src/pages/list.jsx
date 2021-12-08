import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListRow from "../components/list_row";
import { storeData } from "../store/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Spinner } from "react-bootstrap";
import FormModal from "../components/form_modal";

function List() {
  const dispatch = useDispatch();
  const all_data = useSelector((state) => state.all_data);
  const [show, setShow] = useState(false);
  const [modal_title, setModalTitle] = useState("");
  const { logout, user } = useAuth0();

  useEffect(() => {
    dispatch(storeData());
  }, []);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (mood) => {
    setModalTitle(mood === "add" ? "Add" : "Edit");
    setShow(true);
  };

  return (
    <div className="container list-container">
      <header>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontWeight: "bold", fontSize: "28px" }}>
            Hi {user && user.name.toUpperCase()}
          </div>
          <div>
            <a class="table-link" onClick={() => handleShow("add")}>
              <span class="fa-stack">
                <i class="fa fa-square fa-stack-2x"></i>
                <i class="fa fa-plus fa-stack-1x fa-inverse"></i>
              </span>
            </a>
            <Button
              variant="danger"
              style={{ fontSize: "14px", padding: "3px 7px" }}
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </Button>
          </div>
        </div>
      </header>
      <div className="row">
        <div className="col-lg-12">
          <div className="main-box clearfix">
            <div className="table-responsive">
              {Array.isArray(all_data) && all_data.length > 0 ? (
                <table className="table user-list">
                  <thead>
                    <tr>
                      <th>
                        <span>Name</span>
                      </th>
                      <th className="text-center">
                        <span>Description</span>
                      </th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {all_data.map((item, i) => {
                      return (
                        <ListRow
                          data={item}
                          index={i}
                          modal_title={modal_title}
                          setModalTitle={setModalTitle}
                        />
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
            </div>
          </div>
        </div>
      </div>
      <FormModal
        handleClose={handleClose}
        show={show}
        title={modal_title}
      />
    </div>
  );
}
export default List;
