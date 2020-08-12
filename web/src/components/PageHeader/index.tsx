import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import { PageHeaderProps } from '../../interfaces';
import './styles.css';



const PageHeader: React.FC<PageHeaderProps<string>> = ({ description, title, children }) => {
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
PageHeader.defaultProps = {
  description: '',
};
PageHeader.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  // chidren: PropTypes.node.isRequired,
};
export default PageHeader;
