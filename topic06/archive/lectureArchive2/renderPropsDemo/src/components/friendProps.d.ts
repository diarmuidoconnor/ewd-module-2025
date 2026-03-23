export type friendProps = {
        name: {
            first: string;
            last: string;
        };
        email: string;
        picture: {
            medium: string;
        };

};

export type FilteredFriendListProps = {
    list: friendProps[];
    render: (item: friendProps) => React.ReactElement;
};
