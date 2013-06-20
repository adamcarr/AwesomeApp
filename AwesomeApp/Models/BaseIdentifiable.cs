using System;

namespace AwesomeApp.Models
{
    public class BaseIdentifiable : IIdentifiable
    {
        public Guid Id { get; set; }

        public BaseIdentifiable()
        {
            Id = Guid.NewGuid();
        }

        public override int GetHashCode()
        {
            return Id.GetHashCode();
        }

        public override string ToString()
        {
            return Id.ToString();
        }
    }
}