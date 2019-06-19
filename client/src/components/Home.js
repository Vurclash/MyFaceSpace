import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Header, Image, Card, Button, Icon, } from 'semantic-ui-react';

const Home = () => {
  const [pages, setPages] = useState([])

  useEffect(() => {
    axios.get("api/facepages")
      .then(res => setPages(res.data))
  }, []);

  const sample = () => {
    if (pages.length) {
      const index = Math.floor(Math.random() * pages.length)
      return pages[index];
    } else {
      return null;
    }
  }

  const dislike = (id) => {
    setPages(pages.filter(c => c.id !== id))
  }

  const like = (id) => {
    axios.put(`api/facepages/$(id)`)
      .then(() => setPages(pages.filter(p => p.id !== id)))
  }

  const page = sample();
  if(page) {
    return (
      <div>
        <br />
        <Header as="h3" textAlign="center">MyFaceSpace!</Header>
        <br />
        <Card>
          <Image src={pages.avatar} />
          <Card.Content>
            <Card.Header>{page.title}</Card.Header>
            <Card.Description>{page.description}</Card.Description>
            <Card.Meta>{page.name}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Button color="red" icon basic onClick={() => dislike(page.id)}>
              <Icon name="frown" />
            </Button>
          </Card.Content>
          <Card.Content extra>
            <Button color="green" icon basic onClick={() => like(page.id)}>
              <Icon name="smile" />
            </Button>
          </Card.Content>
        </Card>
        <Link to='/my-facepages'>
          <Button color="blue">
            My Facepages
          </Button>
        </Link>
      </div>
    )
  }
};


export default Home;