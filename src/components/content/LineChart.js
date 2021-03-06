import React from 'react';
import {Line} from 'react-chartjs-2';
import { StyleSheet, css } from 'aphrodite';
import { Column, Row } from 'simple-flexbox';
import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        border: '1px solid #DFE0EB',
        borderRadius: 4,
        cursor: 'pointer'
    },
    graphContainer: {
        marginTop: 24,
        marginLeft: 0,
        marginRight: 0,
        width: '100%'
    },
    graphSection: {
        padding: 24
    },
    graphSubtitle: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: '16px',
        letterSpacing: '0.1px',
        color: '#9FA2B4',
        marginTop: 4,
        marginRight: 8
    },
    graphTitle: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        color: '#252733'
    },
    legendTitle: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: '15px',
        letterSpacing: '0.1px',
        color: '#9FA2B4',
        marginLeft: 8
    },
    separator: {
        backgroundColor: '#DFE0EB',
        width: 1,
        minWidth: 1,
    },
    statContainer: {
        borderBottom: '1px solid #DFE0EB',
        padding: '24px 32px 24px 32px',
        height: 'calc(114px - 48px)',
        ':last-child': {
            border: 'none'
        }
    },
    stats: {
        borderTop: '1px solid #DFE0EB',
        width: '100%'
    },
    statTitle: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: '22px',
        letterSpacing: '0.3px',
        textAlign: 'center',
        color: '#9FA2B4',
        whiteSpace: 'nowrap',
        marginBottom: 6
    },
    statValue: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '30px',
        letterSpacing: '0.3px',
        textAlign: 'center',
        color: '#252733'
    }
});

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 56]
    }
  ]
};

class LineChart extends React.Component {
    renderLegend(color, title) {
        return (<Row vertical="center">
            <div style={{ width: 16, border: '2px solid', borderColor: color }}></div>
            <span className={css(styles.legendTitle)}>{title}</span>
        </Row>);
    }

    renderStat(title, value) {
        return (<Column flexGrow={1} className={css(styles.statContainer)} vertical="center" horizontal="center">
            <span className={css(styles.statTitle)}>{title}</span>
            <span className={css(styles.statValue)}>{value}</span>
        </Column>);
    }

  render() {
    return (
        <Row flexGrow={2} className={css(styles.container)}
        horizontal="center" breakpoints={{ 1024: 'column' }}>
        <Column wrap flexGrow={7} flexBasis="735px" className={css(styles.graphSection)}
            breakpoints={{ 1024: { width: 'calc(100% - 48px)', flexBasis: 'auto' } }}>
            <Row wrap horizontal="space-between">
                <Column>
                    <span className={css(styles.graphTitle)}>Summary</span>
                     <div> 
                         <ButtonGroup size="lg" className="mb-2">
                            <Button>Revenue</Button>
                            <Button>Customers</Button>
                            <Button>Transactions</Button>
                            </ButtonGroup> 
                        </div>
                    <span className={css(styles.graphSubtitle)}>as of 26 May 2020, 09:41 PM</span>
                </Column>
                {this.renderLegend('#3751FF', 'Today')}
                <div><Dropdown as={ButtonGroup}>
<Dropdown.Toggle id="dropdown-custom-1">Days</Dropdown.Toggle>
<Dropdown.Menu className="super-colors">
<Dropdown.Item eventKey="1">30 days</Dropdown.Item>
<Dropdown.Item eventKey="2">90 days</Dropdown.Item>
<Dropdown.Item eventKey="3">180 days</Dropdown.Item>
<Dropdown.Item eventKey="4">365 days</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>{' '}</div>
            </Row>
            <div className={css(styles.graphContainer)}>
                <Line
                    data={data}
                    viewBoxWidth={300}
                    pointsStrokeColor="#3751FF"
                    areaColor="#3751FF"
                    areaVisible={true}
                />
            </div>
        </Column>
        <Column className={css(styles.separator)} breakpoints={{ 1024: { display: 'none' } }}><div /></Column>
        <Column flexGrow={3} flexBasis="342px" breakpoints={{ 1024: css(styles.stats) }}>
            {this.renderStat('Resolved', '449')}
            {this.renderStat('Received', '426')}
        </Column>
    </Row>
    );
  }
}

export default LineChart;