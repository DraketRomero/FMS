import imglgn from "./../img/idb.jpg";
import { useWindowSize } from "../hooks/useWindowSize";
import {
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	styled,
	TextField,
	Typography,
} from "@mui/material";
import { useState, MouseEvent, ChangeEvent } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { LoginProps } from "./../interfaces/LoginProps";

const TextFielsStyled = styled(TextField)({
	"& label.Mui-focused": {
		color: "black",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "black",
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "black",
		},
		"&:hover fieldset": {
			borderColor: "black",
		},
		"&.Mui-focused fieldset": {
			borderColor: "black",
		},
	},
});

export const Login = () => {
	const size = useWindowSize();

	const [version] = useState("2.0.0");

	const [userData, setUserData] = useState<LoginProps>({
		user: "",
		password: "",
	});

	const [showPassword, setShowPassword] = useState(false);

	const handleChangeDataUser = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;

		setUserData((prev) => ({ ...prev, [name]: value }));
	};

	const handleIniciarSesion = () => {
		alert("Iniciado!");
	};

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
	};

	return (
		<div
			style={{
				backgroundImage: `url(${imglgn})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				height: size.height,
				width: size.width,
			}}
		>
			<div
				style={{
					margin: "40vh 0 0 80vh",
					textAlign: "center",
					position: "absolute",
				}}
			>
				<div
					style={{
						background: "#dec9c8",
						borderRadius: "15px",
						textAlign: "center",
					}}
				>
					<div style={{ padding: "30px 0 10px 0" }}>
						<TextFielsStyled
							id="outlined-adornment-password"
							label="Usuario"
							name="user"
							type="text"
							value={userData.user}
							onChange={handleChangeDataUser}
						/>
					</div>

					<div style={{ padding: "10px 30px 10px 30px" }}>
						<FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">
								Password
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								label="Password"
								name="password"
								type={showPassword ? "text" : "password"}
								value={userData.password}
								onChange={(e) => handleChangeDataUser(e)}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
					</div>

					<div style={{ padding: "0 0 10px 0" }}>
						<Button variant="contained" onClick={handleIniciarSesion}>
							Iniciar sesion
						</Button>
					</div>

					<div style={{ padding: "0 0 10px 0" }}>
						<Button variant="contained" onClick={handleIniciarSesion}>
							Version {version}
						</Button>
					</div>
				</div>

				<div style={{ padding: "250px 0 10px 0" }}>
					<Typography variant="body1">
						Desarrollado por{" "}
						<a href="https://www.linkedin.com/in/rdiego-romero/">
							Ing. Reyes Diego Garrido Romero
						</a>
					</Typography>
				</div>
			</div>
		</div>
	);
};
