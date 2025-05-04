import './styles.scss';

const PageHeaderContent = (props) => {
    const { headerText, icon } = props;

    return (
        <div className="wrapper">
            <h2>{headerText}</h2>
        </div>
    );
};


export default PageHeaderContent;