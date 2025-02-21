import { IProp } from "@/types/components";
import { Code, Table } from "@chakra-ui/react";

interface IPropsTableProps {
  props: IProp[];
}

const PropsTable = ({ props }: IPropsTableProps) => {
  return (
    <div>
      <Table.Root size="lg" variant={"outline"} rounded="l3">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader className="!font-bold">
              Property
            </Table.ColumnHeader>
            <Table.ColumnHeader className="!font-bold">Type</Table.ColumnHeader>
            <Table.ColumnHeader className="!font-bold">
              Default
            </Table.ColumnHeader>
            <Table.ColumnHeader className="!font-bold">
              Description
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.map((prop: IProp) => (
            <Table.Row key={prop.property} className="!text-md">
              {prop.property && (
                <Table.Cell>
                  <Code size="md" variant="surface">
                    {prop.property}
                  </Code>
                </Table.Cell>
              )}
              {prop.type && <Table.Cell>{prop.type}</Table.Cell>}
              {prop.default && (
                <Table.Cell>
                  <Code size="md" variant="surface">
                    {prop.default}
                  </Code>
                </Table.Cell>
              )}
              {prop.description && <Table.Cell>{prop.description}</Table.Cell>}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default PropsTable;
