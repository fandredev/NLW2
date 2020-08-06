import React from "react";
import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import "./styles.css";

interface PageHeaderProps<S> {
  title: S;
  description?: S;
}

const PageHeader: React.FC<PageHeaderProps<string>> = (props) => {
  const { description, title, children } = props;
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>
      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children} {/* Form */}
      </div>
    </header>
  );
};
export default PageHeader;
