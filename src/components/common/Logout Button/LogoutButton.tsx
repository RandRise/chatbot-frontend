import { LogoutOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
const LogoutButton: React.FC<{ collapsed: boolean }> = (props) => {
    const navigate = useNavigate()
    return (
        <>
            {props.collapsed ?   <Tooltip title="Logout" placement="topRight"><Button
                type="default"
                icon={<LogoutOutlined />}
                onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("role");
                    navigate("/");
                    // window.location.reload();
                }}
            ></Button></Tooltip> : <Button
                type="default"
                icon={<LogoutOutlined />}
                onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("role");
                    navigate("/");
                    window.location.reload();
                }}
            >
                Logout
            </Button>}

        </>
    )
}

export default LogoutButton