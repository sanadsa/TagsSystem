export interface Tag {
  id: number;
  parentId: number;
  label: string;
  isExpanded: boolean;
  children: Tag[];
}
