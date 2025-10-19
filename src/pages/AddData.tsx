import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus, Search, MoreHorizontal, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(1, "Database name is required").max(100),
  source: z.string().min(1, "Source is required"),
  owner: z.string().min(1, "Owner is required").max(100),
});

type DatabaseEntry = {
  id: string;
  name: string;
  source: string;
  owner: string;
  created: string;
};

const AddData = () => {
  const [databases, setDatabases] = useState<DatabaseEntry[]>([
    {
      id: "1",
      name: "ASMOBBIN",
      source: "Local",
      owner: "ACCOUNTADMIN",
      created: "3 days ago",
    },
    {
      id: "2",
      name: "CUSTOMER_DATA_ANALYTICS",
      source: "Local",
      owner: "ACCOUNTADMIN",
      created: "3 days ago",
    },
    {
      id: "3",
      name: "DATAPROCESSINGAPP",
      source: "Share",
      owner: "ACCOUNTADMIN",
      created: "3 days ago",
    },
    {
      id: "4",
      name: "SLMOBBIN",
      source: "Local",
      owner: "ACCOUNTADMIN",
      created: "3 days ago",
    },
    {
      id: "5",
      name: "SNOWFLAKE",
      source: "Share",
      owner: "",
      created: "5 days ago",
    },
    {
      id: "6",
      name: "SNOWFLAKE_LEARNING_DB",
      source: "Local",
      owner: "ACCOUNTADMIN",
      created: "5 days ago",
    },
    {
      id: "7",
      name: "SNOWFLAKE_SAMPLE_DATA",
      source: "Share",
      owner: "ACCOUNTADMIN",
      created: "5 days ago",
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      source: "",
      owner: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const newDatabase: DatabaseEntry = {
      id: String(databases.length + 1),
      name: values.name,
      source: values.source,
      owner: values.owner,
      created: "Just now",
    };

    setDatabases([newDatabase, ...databases]);
    setIsDialogOpen(false);
    form.reset();
    
    toast({
      title: "Database added",
      description: `${values.name} has been added successfully.`,
    });
  };

  const filteredDatabases = databases.filter((db) =>
    db.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">Databases</h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Database
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Add New Database</DialogTitle>
                <DialogDescription>
                  Enter the details for the new database entry.
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Database Name</FormLabel>
                        <FormControl>
                          <Input placeholder="CUSTOMER_DATABASE" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="source"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Source</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select source type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Local">Local</SelectItem>
                            <SelectItem value="Share">Share</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="owner"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Owner</FormLabel>
                        <FormControl>
                          <Input placeholder="ACCOUNTADMIN" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">Add Database</Button>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Databases Count */}
        <div className="text-lg font-semibold text-foreground">
          {filteredDatabases.length} Database{filteredDatabases.length !== 1 ? "s" : ""}
        </div>

        {/* Search and Filter Bar */}
        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search databases..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Source: All
            </Button>
          </div>
        </div>

        {/* Databases Table */}
        <Card>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%]">NAME ↑</TableHead>
                  <TableHead className="w-[20%]">SOURCE</TableHead>
                  <TableHead className="w-[25%]">OWNER</TableHead>
                  <TableHead className="w-[15%]">CREATED</TableHead>
                  <TableHead className="w-[5%]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDatabases.map((database) => (
                  <TableRow key={database.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-muted-foreground" />
                        {database.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={database.source === "Local" ? "secondary" : "default"}>
                        {database.source}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {database.owner || "—"}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {database.created}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AddData;
