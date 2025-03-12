import { IProp } from "@/types/components";
import { Code, Table } from "@chakra-ui/react";

interface IPropsTableProps {
  props: IProp[];
}

const PropsTable = ({ props }: IPropsTableProps) => {
  return (
    <div>
      <Table.ScrollArea rounded="l3" borderWidth="1px">
        <Table.Root size="lg" variant={"outline"}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader className="!font-bold">
                Property
              </Table.ColumnHeader>
              <Table.ColumnHeader className="!font-bold">
                Type
              </Table.ColumnHeader>
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
                {prop.property && <Table.Cell>{prop.property}</Table.Cell>}
                {prop.type && (
                  <Table.Cell>
                    <Code size="md" variant="surface">
                      {prop.type}
                    </Code>
                  </Table.Cell>
                )}
                {prop.default && (
                  <Table.Cell>
                    <Code size="md" variant="surface">
                      {prop.default}
                    </Code>
                  </Table.Cell>
                )}
                {prop.description && (
                  <Table.Cell className="!text-nowrap md:!text-wrap">
                    {prop.description}
                  </Table.Cell>
                )}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Table.ScrollArea>
    </div>
  );
};

export default PropsTable;
