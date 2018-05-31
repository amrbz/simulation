import Layout from '../components/MyLayout.js'
import Header from '../components/Header.js'
import Link from 'next/link'
import axios from 'axios';

import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
import { Grid, Row, Col, Alert, ButtonGroup, Button, MenuItem, DropdownButton, Glyphicon } from 'react-bootstrap';
import Slider from 'react-rangeslider';
import stylesheet from 'react-rangeslider/lib/index.css'
// import stylesheet from 'rc-slider/assets/index.css';

import { Chart } from 'react-google-charts';


const params = {v: '3.exp', key: 'AIzaSyDr2YFdzTVM5JJsaYcFcuXpc4uJBaIcktk'};

export default class extends React.Component {

  constructor(props) {
    super(props);
    // this.toggleModal = this.toggleModal.bind(this);
    // this.onMarkerClick = this.onMarkerClick.bind(this);
    this.addTimeClick = this.addTimeClick.bind(this);
    this.subTimeClick = this.subTimeClick.bind(this);
    this.updateTimeScale = this.updateTimeScale.bind(this)

    this.togglePlaying = this.togglePlaying.bind(this);
    // this.startPlaying = this.startPlaying.bind(this);
    // this.stopPlaying = this.stopPlaying.bind(this);
    this.toggleRepeaed = this.toggleRepeaed.bind(this);
    this.toStart = this.toStart.bind(this);

    this.onSlide = this.onSlide.bind(this);
    this.asd = this.asd.bind(this);

    this.state = {
      emulationId: props.url.query.id,
      emulation: false,
      nodesLoading: false,
      timeScale: 100,
      isPlaying: false,
      repeated: false,
      player: false,
      slider: {
        min: false,
        max: false,
        step: false,
        value: 0,
      },
      blocks: {
        list: false
      },
      block: false,
      adoptions: {
        list: false,
      },
      providers: false,
      maxLocalDiff: false,
    };
  }

  onSlide(value) {
    this.setState({
      slider: {
        min: this.state.slider.min,
        max: this.state.slider.max,
        step: this.state.slider.step,
        value: value
      }
    })
  }

  asd(value) {
    return(
      <p>+{Math.round(value-this.state.slider.min)} ms</p>
    )
  }

  // onMarkerClick(blockId) {    
  //   for (let i = 0; i < this.state.blocks.list.length; i += 1) {
  //     if (this.state.blocks.list[i].block.id === blockId) {
  //       // console.log(this.state.blocks.list[i].block);
  //       this.setState({
  //         block: this.state.blocks.list[i].block
  //       })
  //       break;
  //     }
  //   }
  // }


  updateTimeScale(value){
    this.setState({
      timeScale: value
    })
  }


  addTimeClick() {    
    this.setState({
      slider: {
        min: this.state.slider.min,
        max: this.state.slider.max,
        step: this.state.slider.step,
        value: this.state.slider.value + this.state.timeScale
      }
    })
  }

  togglePlaying() {
    this.setState({
      isPlaying: !this.state.isPlaying
    })


    if (this.state.player) {
      clearInterval(this.state.player)
      this.setState({
        player: false
      })
    } else{
      const player = setInterval(() => {
        
        if (this.state.slider.value >= this.state.slider.max) {     
          if (this.state.repeated === true) {
            this.setState({
              slider: {
                min: this.state.slider.min,
                max: this.state.slider.max,
                step: this.state.slider.step,
                value: this.state.slider.min
              }
            })
          } else {
            clearInterval(this.state.player)
            this.setState({
              player: false,
              isPlaying: false
            })
          }
        }

        this.setState({
          slider: {
            min: this.state.slider.min,
            max: this.state.slider.max,
            step: this.state.slider.step,
            value: this.state.slider.value + this.state.slider.step/2
          }
        })
        
      }, 100)

      this.setState({
        player: player
      })
    }
    
  }

  toggleRepeaed() {
    this.setState({
      repeated: !this.state.repeated
    })
  }

  toStart() {
    this.setState({
      slider: {
        min: this.state.slider.min,
        max: this.state.slider.max,
        step: this.state.slider.step,
        value: this.state.slider.min
      }
    })
  }

  subTimeClick() {
    this.setState({
      slider: {
        min: this.state.slider.min,
        max: this.state.slider.max,
        step: this.state.slider.step,
        value: this.state.slider.value - this.state.timeScale
      }
    })
  }


  async componentDidMount() {
    this.setState({nodesLoading: true});
    const res = await axios.get(`http://127.0.0.1:7500/api/v1.0/emulations/${this.state.emulationId}`);
    console.log(res);

    const firstTimestamp = parseFloat(res.data.blocks[0].block.adopted);
    const lastTimestamp = parseFloat(res.data.blocks[res.data.blocks.length-1].block.adopted);
    const diff = lastTimestamp - firstTimestamp;

    let maxLocalDiff = 0;
    let adoptions = [];
    for (let height = 0; height < res.data.emulation.iterations; height += 1) {
      const blocks = res.data.blocks.filter((item) => item.block.height === height);
      const localDiff = blocks[blocks.length - 1].block.adopted - blocks[0].block.adopted;      
      maxLocalDiff = localDiff > maxLocalDiff ? localDiff : maxLocalDiff;
      adoptions.push(blocks[0].block.adopte);
    }

    console.log('adoptions', adoptions);
    

    this.setState({ 
      nodesLoading: false,
      emulation: res.data.emulation,
      providers: res.data.providers,
      slider: {
        min: firstTimestamp,
        max: lastTimestamp,
        step: diff/100,
        value: firstTimestamp,
      },
      maxLocalDiff: maxLocalDiff,
      adoptions: {
        list: adoptions
      },
      blocks: {
        list: res.status === 204 ? [] : res.data.blocks
      }
    });
  }


  render() {
    const markers = this.state.blocks.list === false ? null :
      this.state.blocks.list
        .filter((item) => item.block.adopted <= this.state.slider.value)
        .filter((item, index) => {
          let maxHeight = -1;
          
          for(let i = 0; i < this.state.blocks.list.length; i += 1){
            if (
              this.state.blocks.list[i].block.nodeId === item.block.nodeId && 
              this.state.blocks.list[i].block.adopted <= this.state.slider.value
            ) {
              maxHeight += 1;
            }
          }

          return item.block.height === maxHeight;
        })
        .map((item, index) => (
          <Marker
            key={`marker_${index}`}
            lat={item.city.lat}
            lng={item.city.lng}
            draggable={false}
            content={'Hello, React :)'}
            icon={item.block.provider === item.block.nodeId ?
              'http://chart.apis.google.com/chart?chst=d_map_xpin_letter&chld=pin_star|' + item.block.height + '|' + this.state.providers[item.block.provider][item.block.height] + '|000|FF0' : 
              'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + item.block.height + '|' + this.state.providers[item.block.provider][item.block.height]
            }
          />
      )
    )
    
    // const LineChart = require("react-chartjs").Line;
    

    // let minZeroHeightAdopted = 0;
    // let maxZeroHeightAdopted = 0;
    // let zeroData = [];

    // let heightData = this.state.emulation ? Array(this.state.emulation.iterations).fill(0): null
    // this.state.blocks.list ? 
    //   this.state.blocks.list
    //     .filter((item) => item.block.height === 0)
    //     .map((item, index) => {
    //       if (index === 0) {
    //         minZeroHeightAdopted = item.block.adopted;
    //       }
    //       minZeroHeightAdopted = minZeroHeightAdopted < item.block.adopted ? minZeroHeightAdopted : item.block.adopted;
    //       maxZeroHeightAdopted = minZeroHeightAdopted > item.block.adopted ? minZeroHeightAdopted : item.block.adopted;
          
    // }) : null

    // const diff = maxZeroHeightAdopted-minZeroHeightAdopted;
    
    
    // if (this.state.blocks.list) {
    //   let blocksQty = 0;
    //   for (let i = 0; i < (diff/10)+4; i += 1) {
    //     this.state.blocks.list
    //       .filter((item) => item.block.height === 0)
    //       .filter((item) => item.block.adopted > minZeroHeightAdopted + i*10)
    //       .filter((item) => item.block.adopted <= minZeroHeightAdopted + (i+1)*10)
    //       .map((item, index) => {
    //         blocksQty += 1;
    //       }
    //     )
    //     zeroData.push(blocksQty)
    //   }
    // }
    

    // const zeroHeight = this.state.emulation ? {
    //   labels: Array.apply(null, {length: (diff/10)+4}).map(Number.call, Number),
    //   datasets: [
    //     {
    //       fillColor: "rgba(151,187,205,0.2)",
    //       strokeColor: "rgba(151,187,205,1)",
    //       pointColor: "rgba(151,187,205,1)",
    //       pointStrokeColor: "#fff",
    //       pointHighlightFill: "#fff",
    //       pointHighlightStroke: "rgba(151,187,205,1)",
    //       data: zeroData
    //     }
    //   ]
    // } : null


    let gHeightData = [["Height","Blocks", {role:'style'}]]
    let gLineData = [['Time Diff', 'Height 0']]
    
    if (this.state.emulation) {
      for (let i = 0; i < this.state.emulation.iterations; i += 1) {
        gHeightData.push(['Height ' + i, 0, 'stroke-color: #0D47A1; stroke-opacity: 0.6; stroke-width: 1; fill-color: #2196F3; fill-opacity: 0.2'])
        // gLineData[0].push('Height ' + i);
      }
    }

    
    gHeightData && this.state.blocks.list ? 
      this.state.blocks.list
        .filter((item) => item.block.adopted <= this.state.slider.value)
        .map((item, index) => {
          gHeightData[item.block.height+1][1] += 1
          if (item.block.height > 0) {
            gHeightData[item.block.height][1] -= 1
          }
    }) : null

    // console.log(gLineData);
    // const diff = this.state.slider.max-this.state.slider.min;

    // if (this.state.adoptions.list) {
      // for (let i = 0; i < this.state.adoptions.list.length; i +=1) {
        // let blocksQty = 0;
        // for (let i = 0; i < (this.state.maxLocalDiff)/10; i += 1) {
        //   let row = [i*10];
        //     this.state.blocks.list
        //       // .filter((item) => item.block.adopted >= this.state.adoptions.list[i])
        //       .filter((item) => item.block.adopted > this.state.slider.value + i*10)
        //       .filter((item) => item.block.adopted <= this.state.slider.value + (i+1)*10)
        //       .map((item, index) => {
        //         blocksQty += 1;
        //       })
              
        //     console.log(blocksQty);
            
        //     row.push(blocksQty);
        //     // row.push(blocksQty-5 > 0 ? blocksQty -5 : 0);
        //   gLineData.push(row);
        // }
      // }
    // }
    

    // console.log(gLineData);
    


    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        
        <Row>
          <Col>
            <h1>Emulation map</h1>
            {
              this.state.nodesLoading === false ? null : (
                <div className={'nodesLoadingInfo'}>
                  <Alert bsStyle="warning">
                    Please wait. Loading nodes list in progress...
                  </Alert>
                </div>
              )
            }
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            {
              this.state.blocks.list === false || this.state.blocks.list.length === 0 ? null : (
                <Slider
                  value={this.state.slider.value}
                  orientation="horizontal"
                  onChange={this.onSlide}
                  min={this.state.slider.min}
                  max={this.state.slider.max}
                  step={this.state.slider.step}
                  format={this.asd}
                />
              )
            }
          </Col>
          <Col lg={4} style={{paddingBottom: '2em'}}>
            <ButtonGroup bsSize="large" style={{marginRight: 20}}>
              <DropdownButton 
                title={<Glyphicon glyph="time"><span style={{marginLeft: 20}}>{this.state.timeScale} ms</span></Glyphicon>} 
                bsSize="large" 
                onSelect={this.updateTimeScale}
                id="time-scale-dropdown"
              >
                <MenuItem eventKey={10}>10 ms</MenuItem>
                <MenuItem eventKey={50}>50 ms</MenuItem>
                <MenuItem eventKey={100}>100 ms</MenuItem>
                <MenuItem eventKey={200}>200 ms</MenuItem>
                <MenuItem eventKey={500}>500 ms</MenuItem>
                <MenuItem eventKey={1000}>1000 ms</MenuItem>                
              </DropdownButton>
              <Button onClick={this.subTimeClick}><Glyphicon glyph="minus" /></Button>
              <Button onClick={this.addTimeClick}><Glyphicon glyph="plus" /></Button>
            </ButtonGroup>

            <ButtonGroup bsSize="large" >
              <Button onClick={this.subTimeClick} onClick={this.toStart}><Glyphicon glyph="step-backward" /></Button>
              <Button onClick={this.addTimeClick} onClick={this.togglePlaying}><Glyphicon glyph={this.state.isPlaying ? 'pause' : 'play'} /></Button>
              <Button onClick={this.addTimeClick} onClick={this.toggleRepeaed} active={this.state.repeated}><Glyphicon glyph="repeat" /></Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <Gmaps
              width={'100%'}
              height={'600px'}
              lat={20}
              lng={20}
              zoom={2}
              loadingMessage={'Loading...'}
              params={params}
              onMapCreated={this.onMapCreated}
            >
              {markers}
            </Gmaps>
          </Col>
          <Col lg={4} >
            {
              this.state.emulation ? (
                <Chart
                  chartType="ColumnChart"
                  data={gHeightData}
                  options={{
                    title:"Blocks by height",
                    bar:{
                      groupWidth:"90%"
                    },
                    chartArea: {
                      width: '80%', 
                      height: '80%'
                    },
                    legend:{
                      position:"top"
                    },
                    animation:{
                      duration: 400,
                      easing: 'out',
                    },
                    vAxis: {minValue: this.state.emulation.nodesQty}
                  }}
                  width={'100%'}
                  height={'250px'}
                />
              ) : null
            }
            
            {/* {
              this.state.emulation ? (
                <Chart
                  chartType="LineChart"
                  data={gLineData}
                  options={{
                    
                    title:"Block adoption by height",
                    bar:{
                      groupWidth:"90%"
                    },
                    chartArea: {
                      width: '90%', 
                      height: '80%'
                    },
                    legend:{
                      position:"top"
                    },
                    animation:{
                      duration: 400,
                      easing: 'out',
                    },
                    hAxis:{
                      title:"Time"
                    },
                    vAxis:{
                      title:"blocks",
                      minValue: this.state.emulation.nodesQty
                    }
                  }}
                  width={'100%'}
                  height={'250px'}
                />
              ) : null
            }
             */}

            {/* {
              this.state.emulation ? (
                <div>
                  <h2>Blocks adoption</h2>
                  <LineChart 
                    data={zeroHeight} 
                    width={400} 
                    height={250}
                    options={{
                      legend: {
                        display: false
                      }
                    }}
                  />
                </div>
              ) : 'Loading chart...'
            } */}
            
          </Col>
        </Row>
        <Row>
          <Col>
            
          </Col>
        </Row>
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');
          font-family: 'Open Sans', sans-serif;
          color: #333;

          h1 {
            font-size: 4em;
            font-weight: 400;
            margin: 1em 0 1em 0 ;
          }
          
          h2 {
            margin: 0 0 1em 0;
            font-weight: 300;
          }

          h3 {
            margin-top: 1em;
          }

          div.nodesLoadingInfo {
            position: absolute;
            bottom: 2em;
            right: 2em;
            width: 240px;
          }

          .rangeslider__handle-tooltip {
            width: 200px!important;
          }
          
        `}</style>
      </Layout>
    )
  }
}