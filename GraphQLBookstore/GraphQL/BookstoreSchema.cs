using GraphQL;
using GraphQL.Types;

namespace  GraphQLBookstore.GraphQL 
{
    class BookstoreSchema : Schema
    {
        public BookstoreSchema(IDependencyResolver resolver) : base(resolver)
        {
            Query = resolver.Resolve<BookstoreQuery>(); 
            Mutation = resolver.Resolve<BookstoreMutation>(); 
        }
    }
}