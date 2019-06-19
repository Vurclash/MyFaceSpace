import React from 'react'
import axios from 'axios'
import { Card, Divider, Image, } from 'semantic-ui-react'

class MyFacepages extends React.Component {
  state = { facepages: [], }

  componentDidMount() {
    axios.get('/api/my_facepages')
      .then(res => this.setState({ facepages: res.data, }))
  };

  render() {
    return (
      <Card.group itemsPerRow={4}>
        {this.state.facepages.map(page =>
          <Card key={page.id}>
            <Image src={page.avatar} />
            <Card.Content>
              <Divider />
              <Card.Header>
                {page.title}
                <br />
                {page.name}
              </Card.Header>
            </Card.Content>
          </Card>
        )}
      </Card.group>
    )
  }
}

export default MyFacepages