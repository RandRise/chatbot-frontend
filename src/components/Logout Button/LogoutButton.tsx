import { LogoutOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
const LogoutButton: React.FC<{ collapsed: boolean }> = (props) => {
    const navigate = useNavigate()
    return (
        <>
            {props.collapsed ?   <Tooltip title="Logout" placement="left"><Button
                type="primary"
                icon={<LogoutOutlined />}
                onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("role");
                    navigate("/");
                }}
            ></Button></Tooltip> : <Button
                type="primary"
                icon={<LogoutOutlined />}
                onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("role");
                    navigate("/");
                }}
            >
                Logout
            </Button>}

        </>
    )
}

export default LogoutButton