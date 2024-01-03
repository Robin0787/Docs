export interface TCard {
  desc: string;
  fileSize: string;
  close: boolean;
  tagDetails: TTagDetails;
}

export interface TTagDetails {
  isOpen: boolean;
  tagTitle: string;
  tagColor: string;
}
