// if there is any error go to that type file and make those type as string
import { Button, Col, Icon, Layout, Menu, Row, Switch} from 'antd';
import * as React from "react";
import {Link} from "react-router-dom";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

interface IState {
    collapsed: boolean;
    themeOption: string;
    currentMenuSelection: string;
    menuModeOption: string;
}

interface IBreadcrumbProps {
    title?: string;
    info?: any;
    notebook?: any;
    github?: any;
    documentation?: any;

}

export default class SiderMenu extends React.Component<IBreadcrumbProps, IState> {
    public static defaultProps = {
        documentation: "Enter Documentation Link",
        github: "Enter Github Link ",
        info: "Enter Info Link",
        notebook: "Enter Notebook Link",
        title: "Enter Title",

    };

    public state = {
        collapsed: false,
        currentMenuSelection: '1',
        menuModeOption: 'inline',
        themeOption: 'dark',
    };



    public onCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    public handleToggle = () => {
        this.setState({
            themeOption: this.state.themeOption === 'dark' ? 'light' : 'dark',
        });
    };

    public handleClick = (e: { key: string; }) => {
        this.setState({
            currentMenuSelection: e.key,
        });
    };

    public changeMode = () => {
        this.setState(
            {
                menuModeOption: this.state.menuModeOption === 'inline' ? 'vertical' : 'inline',
            });
    };

    public render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                {/*(53,24): Type 'string' is not assignable to type '"dark" | "light" | undefined'. you must go to type
                file and replace '"dark" | "light" | undefined' to 'string'*/}
                <Sider theme={this.state.themeOption} collapsible={true} collapsed={this.state.collapsed}
                       onCollapse={this.onCollapse}>

                    <Menu defaultSelectedKeys={['Home']}
                          onClick={this.handleClick}
                          selectedKeys={[this.state.currentMenuSelection]}
                          theme={this.state.themeOption}
                          mode={this.state.menuModeOption}
                    >
{/*in types file, replace defined types to string*/}
                        <Menu.Item key="Home">
                            <Icon type="home" theme="twoTone"/>
                            <span>Home Page</span>
                            <Link to="/"/>

                        </Menu.Item>


                        <Menu.Item key="intro">
                            <Icon type="info-circle" theme="twoTone"/>
                            <span>Introduction</span>
                            <Link to="/intro"/>
                        </Menu.Item>

                        <SubMenu key="review" title={
                            <span>
                  <Icon type="book" theme="twoTone"/>
                  <span>Literature Review</span>
                </span>
                        }
                        >
                            <Menu.Item key="valuationai">
                                <span>Literature</span>
                                <Link to="/literature"/>
                            </Menu.Item>

                        </SubMenu>


                        <SubMenu key="research" title={
                            <span>
                  <Icon type="tool" theme="twoTone"/>
                  <span>Research Methodology</span>
                </span>
                        }
                        >
                            <Menu.Item key="design">
                                <span>Methodology</span>
                                <Link to="/methodologyPageInfo"/>
                            </Menu.Item>


                            <SubMenu key="pipeline" title={
                                <span>
                  <Icon type="experiment" theme="twoTone"/>
                  <span>AI Pipelines</span>
                </span>
                            }
                            >
                                <Menu.Item key="prep">Data preparation</Menu.Item>

                                <Menu.Item key="types">Types of Data</Menu.Item>

                            </SubMenu>

                            <Menu.Item key="features">
                                <span>Feature Importance</span>
                                <Link to="/featureimportance"/>
                            </Menu.Item>

                            <SubMenu key="ml" title={
                                <span>
                  <Icon type="project" theme="twoTone"/>
                  <span>ML algorithms</span>
                </span>
                            }
                            >
                                <Menu.Item key="tuning">Hyper parameter tuning</Menu.Item>
                                <Menu.Item key="selection">Feature selection</Menu.Item>


                            </SubMenu>

                        </SubMenu>

                        <Menu.Item key="res">
                            <Icon type="pie-chart" theme="twoTone"/>
                            <span>Results</span>
                            <Link to="/results"/>

                        </Menu.Item>

                        <Menu.Item key="summary">
                            <Icon type="highlight" theme="twoTone"/>
                            <span>Summary and Conclusion</span>
                            <Link to="/summary"/>
                        </Menu.Item>


                        <SubMenu key="building" title={
                                <span>
                  <Icon type="control" theme="twoTone" />
                  <span>Website Components</span>
                </span>
                            }
                            >
                                <Menu.Item key="djangoAxios">
                            <Icon type="tool" theme="twoTone" />
                            <span>djangoAxios</span>
                            <Link to="/components/djangoAxios"/>
                        </Menu.Item>

                            <Menu.Item key="codeHighlight">
                            <Icon type="tool" theme="twoTone" />
                            <span>codeHighlight</span>
                            <Link to="/components/codeHighlight"/>
                        </Menu.Item>

                            <Menu.Item key="iframe">
                            <Icon type="tool" theme="twoTone" />
                            <span>iframe</span>
                            <Link to="/components/iframe"/>
                        </Menu.Item>

                            <Menu.Item key="jupyter">
                            <Icon type="tool" theme="twoTone" />
                            <span>jupyter</span>
                            <Link to="/components/jupyter"/>
                        </Menu.Item>

                            <Menu.Item key="overleaf">
                            <Icon type="tool" theme="twoTone" />
                            <span>overleaf</span>
                            <Link to="/components/overleaf"/>
                        </Menu.Item>


                            <Menu.Item key="renderLatexString">
                            <Icon type="tool" theme="twoTone" />
                            <span>renderLatexString</span>
                            <Link to="/components/renderLatexString"/>
                        </Menu.Item>

                            <Menu.Item key="notesGraphql">
                            <Icon type="tool" theme="twoTone" />
                            <span>notesGraphql</span>
                            <Link to="/components/notesGraphql"/>
                        </Menu.Item>


                            </SubMenu>

                    </Menu>

                </Sider>


                <Layout>

                    <Header style={{background: '#fff', padding: 0, textAlign: 'center'}}>
                        <Row>
                            <Col span={20}>
                                <h1>{this.props.title}</h1>
                            </Col>
                            <Col span={2}>
                                <Switch
                                    checked={this.state.themeOption === 'dark'}
                                    onChange={this.handleToggle}
                                    checkedChildren="Dark"
                                    unCheckedChildren="Light"
                                />
                            </Col>
                            <Col span={2}>
                                <Switch
                                    checked={this.state.menuModeOption === 'inline'}
                                    onChange={this.changeMode}
                                    checkedChildren="inline"
                                    unCheckedChildren="vertical"
                                />
                            </Col>
                        </Row>

                    </Header>


                    <Content style={{margin: '0 2px'}}>


                        <Button href={this.props.info}> Information
                        </Button>
                        <Button href={this.props.notebook}>Jupyter Notebook
                        </Button>
                        <Button href={this.props.github}>GitHub Repository
                        </Button>
                        <Button href={this.props.documentation}>Documentation
                        </Button>

                        <div style={{padding: 2, background: '#fff', minHeight: 360}}>
                            {this.props.children}
                        </div>

                    </Content>


                    <Footer style={{textAlign: 'center'}}>
                        <a href="https://github.com/chandraveshchaudhari">GitHub <Icon type="github" /> : Chandravesh Chaudhari
</a><Link to={{ pathname: "https://github.com/chandraveshchaudhari" }} target="_blank" />
                    </Footer>


                </Layout>
            </Layout>

        );
    }
}

