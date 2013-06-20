using System;

namespace AwesomeApp.Models
{
    public interface IIdentifiable : IIdentifiable<Guid>
    {
        
    }

    public interface IIdentifiable<TId>
    {
        TId Id { get; set; }
    }
}