import useOnlineStatus from "../utils/useOnlineStatus";

const OnlineStatus = () => {
    const onlineStatus = useOnlineStatus();

    const containerStyle = {
        position: "fixed",
        top: "16px",
        right: "16px",
        padding: "10px 16px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
        color: "#fff",
        backgroundColor: onlineStatus ? "#22c55e" : "#ef4444", // green or red
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        zIndex: 9999
    };

    const dotStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: onlineStatus ? "#bbf7d0" : "#fecaca",
    };

    if (onlineStatus === false) return (
        <div style={containerStyle}>
            <span style={dotStyle}></span>
            <span>{onlineStatus ? "You are Online" : "You are Offline"}</span>
        </div>
    );
}

export default OnlineStatus