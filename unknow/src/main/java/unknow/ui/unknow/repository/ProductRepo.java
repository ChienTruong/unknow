package unknow.ui.unknow.repository;

import unknow.ui.unknow.entity.ProductEntity;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "products", path = "products")
public interface ProductRepo extends PagingAndSortingRepository<ProductEntity, Long> {

}
