import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Parse from "parse";
import styles from "./index.module.css";
import Title from "../../../components/common/Title";
import SettingOption from "../SettingOption";
import { ReactComponent as ProfileIcon } from "../../../assets/icons/profile.svg";
import { ReactComponent as CameraIcon } from "../../../assets/icons/photograph.svg";
import { ReactComponent as PhotoIcon } from "../../../assets/icons/photo.svg";
import { ReactComponent as SchoolIcon } from "../../../assets/icons/school.svg";
import { ReactComponent as KeyIcon } from "../../../assets/icons/key.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/icons/facebook-out-line.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/icons/logout.svg";
import { navigate } from "@reach/router";

function SettingsMenu() {
  const { setCurrentUser } = useContext(AuthContext);

  const logout = () => {
    Parse.User.logOut().then(async () => {
      await setCurrentUser(Parse.User.current());
      navigate("/");
    });
  };

  return (
    <div className={styles.container}>
      <Title className={styles.title} text="Adjustes" />

      <Title
        className={styles["secondary-title"]}
        text="Informacion Basica"
        typeStyle="secondary"
      />
      <SettingOption
        title="Perfil"
        description="Tu informacion de perfil"
        Icon={ProfileIcon}
        onClick={() => navigate("settings/profile")}
      />
      <SettingOption
        title="Foto de Perfil"
        description="Cambia tu foto de perfil"
        Icon={CameraIcon}
        onClick={() => navigate("settings/picture")}
      />
      <SettingOption
        title="Cambiar Cover"
        description="Elegir imagen de tu cover"
        Icon={PhotoIcon}
        onClick={() => navigate("settings/cover")}
      />
      <SettingOption
        title="Escuela"
        description="Agrega tu escuela"
        Icon={SchoolIcon}
        onClick={() => navigate("settings/school")}
      />

      <Title
        className={styles["secondary-title"]}
        text="Tu Cuenta"
        typeStyle="secondary"
      />
      <SettingOption
        title="Contraseña"
        description="Cambia tu Contraseña"
        Icon={KeyIcon}
        onClick={() => navigate("settings/password")}
      />
      <SettingOption
        title="Facebook Login"
        description="Administra FaceBook Login"
        Icon={FacebookIcon}
        onClick={() => navigate("settings/facebook")}
      />
      <SettingOption
        title="Cerrar Sesion"
        description="Cierra sesion en este dipositivo"
        Icon={LogoutIcon}
        onClick={logout}
      />
    </div>
  );
}

export default SettingsMenu;
