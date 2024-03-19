export interface friendProps {
        name: {
            first: string;
            last: string;
        };
        email: string;
        picture: {
            medium: string;
        };

}

export interface FilteredFriendListProps {
    list: friendProps[];
    render: (item: friendProps) => React.ReactElement;
  }
