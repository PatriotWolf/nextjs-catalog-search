import styled from 'styled-components';
import React from 'react';
import fetch from 'isomorphic-unfetch';
const Div= styled.div`
overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /*centers items on the line (the x-axis by default)*/
  align-items: center
`;
const Input = styled.input`
    width:100%;
`
const Suggest = styled.div`
    background:#fff;
    display: flex;
    
    height: 50vh;
    width:70vw;
    border: 2px solid #000;
    transition: 2s;
    padding: 0;
    margin: 0;
    list-style: none;
    
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    
    -webkit-flex-flow: row wrap;
    justify-content: space-around;
`;
const Img = styled.img`
    width :100%;
    height: 30vh;
`;
const ImgRelated = styled.img`
    // width :100%;
    height: 20vh;
`;
const Category = styled.div`
    border-right: 1px solid #9e9e9e;
    width:20%;
    overflow: scroll;
    word-wrap: break-word;
`;
const TileContent = styled.div`
    width:80%;
    display: flex;
    overflow: scroll;
    flex-wrap: wrap;
`;
const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    flex-grow: 1;
    width: 33%;
`;

const Tag = styled.a`
    background-color: crimson;
    color: white;
    border-radius: 3px 0 0 3px;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 20px 0 23px;
    position: relative;
    margin: 0 10px 10px 0;
    text-decoration: none;
`;

const Related = styled.div`
    height:30vh;
    background: white;
    overflow:scroll;
    width:70vw;
    margin-bottom: 3em;
    display: flex;
    flex-wrap: wrap;
`;

class IndexPage extends React.Component {
    state={value:''};
    static async getInitialProps () {
        const data = await import(`../products.json`)
        console.log(data);
        let category = [];
        let result = Object.keys(data).map(function(key) {
            if(typeof category[data[key].category] === 'undefined') {
               category.push(data[key].category)
            }
            return data[key];
          }); 
        return { result }
    }
    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({value: event.target.value});
    }
    handleClickTag = (category) => {
        console.log(category)
        this.setState({value: category});
    }
    render(){
        const {result} = this.props; 
        const { value } = this.state;
        let categories = [];
        categories= result.filter(x=>{
            let {name,category} = x;
            if((name && category) && (name.toLowerCase().includes(value.toLocaleLowerCase()) || category.toLowerCase().includes(value.toLocaleLowerCase())))
            return x
            
        });
        
        let tags = Object.keys(categories).map(function(key) {
            
            return categories[key].category;
          }); 
        const uniqueNames = Array.from(new Set(tags));
        console.log(categories)
        //console.log(categories);
        
        return (
            <Div>
                <span/>
                <div>
                    Suggestions:
                    <br/>
                    <Related>
                        {   result.map(x => {
                            let {category, image_link} = x
                            let temp;
                            (uniqueNames.indexOf(category) < 0) ? temp=false:temp=true;
                            return category && temp && <Card> 
                                    <ImgRelated src={image_link}/> <br/>
                                    labeled as : <Tag>{category}</Tag>
                                </Card>
                                }
                            )
                        }
                    </Related>
                    <Input value={value} onChange={this.handleChange} />
                    <Suggest>
                        
                        <Category>
                            Category Found:<br/>
                            {   
                                uniqueNames.map(x=>{
                                    
                                    return x &&
                                    <Tag onClick={()=>this.handleClickTag(x)}>
                                        {x}
                                    </Tag>
                                })

                            }
                        </Category>
                        <TileContent>
                        {
                            categories.map(x=>{
                                let {name, image_link, category} = x;
                                
                                return <Card>
                                        <Img src={image_link}/>
                                        {name}
                                    </Card>
                                }
                            )
                        }
                        </TileContent>
                    </Suggest>
                </div>
                <span/>
            </Div>
        )
    }
}

export default IndexPage;