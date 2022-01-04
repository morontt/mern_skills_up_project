import React, {Component} from "react";
import './style.scss'
import {getURL, POSTS_BASE_URL} from "../../helpers";
import PostListItem from "./PostListItem";
import Paginator from "./Paginator";

class PostsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            totalPagesCount: 0,
            page: 1
        };

        this.handleSetPage = this.handleSetPage.bind(this);
        this.handleGetCurrentPage = this.handleGetCurrentPage.bind(this);
    }

    handleSetPage(page){
        this.setState({page: parseInt(page)});
    }

    handleGetCurrentPage(){
        return parseInt(this.state.page);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page){
            this.fetchPosts();
        }
    }

    fetchPosts() {
        fetch(getURL(POSTS_BASE_URL+"?page="+this.state.page))
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        isLoaded: true,
                        items: res.data.items,
                        totalPagesCount: res.data.total_pages_count
                    });
                },
                // Note: it is important to handle errors here, and not in the catch () block,
                // so as not to catch the exception from errors in the component itself.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidMount() {
        this.fetchPosts();
    }

    render() {
        const { error, isLoaded, items, totalPagesCount } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <>
                    <ul className={'posts-list'}>
                        {items.map(item => (
                            <PostListItem key={item.uniqueKey} item={item}/>
                        ))}
                    </ul>
                    <Paginator setPage={this.handleSetPage} getPage={this.handleGetCurrentPage} totalPagesCount={totalPagesCount}/>
                </>

            );
        }
    }
}

export default PostsList;